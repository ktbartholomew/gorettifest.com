import { test } from 'node:test';
import assert from 'node:assert/strict';
import { VideoCoordinator } from '../components/home/video-coordinator.ts';
class Video extends EventTarget {
  muted = false;
  paused = true;
  ended = false;
  ready = true;
  starts = 0;
  hasAttribute() { return this.ready; }
  play() { this.paused = false; this.starts++; this.dispatchEvent(new Event('play')); return Promise.resolve(); }
  pause() { if (!this.paused) { this.paused = true; this.dispatchEvent(new Event('pause')); } }
}
function setup() {
 const c = new VideoCoordinator(); const a = new Video(); const b = new Video();
 c.register(a); c.register(b); return {c,a,b};
}
test('only the most visible video plays, and leaving the viewport pauses it',()=>{
 const {c,a,b}=setup(); c.visibility(a,.8); c.visibility(b,.2); c.reconcile();
 assert.equal(a.paused,false); assert.equal(b.paused,true);
 c.visibility(b,1); c.reconcile(); assert.equal(a.paused,true);assert.equal(b.paused,false);
 c.visibility(a,0);c.visibility(b,0);c.reconcile();assert.equal(b.paused,true);
});
test('muting from either native controls or shared control applies to all, including new videos',()=>{
 const {c,a,b}=setup();assert.equal(a.muted,true);assert.equal(b.muted,true);
 a.muted=false;a.dispatchEvent(new Event('volumechange'));assert.equal(c.getMuted(),false);assert.equal(b.muted,false);
 const d=new Video();c.register(d);assert.equal(d.muted,false);
 c.setMuted(true);assert.equal(a.muted,true);assert.equal(b.muted,true);assert.equal(d.muted,true);
});
test('hidden tab pauses playback and visible tab resumes; manual pause survives observer updates',()=>{
 const {c,a}=setup();c.visibility(a,1);c.reconcile();c.setHidden(true);assert.equal(a.paused,true);
 c.setHidden(false);assert.equal(a.paused,false);a.pause();c.visibility(a,.7);c.reconcile();assert.equal(a.paused,true);
 c.visibility(a,0);c.reconcile();c.visibility(a,1);c.reconcile();assert.equal(a.paused,false);
});
test('manual play pauses another video; stale playing events cannot overlap playback',()=>{
 const {c,a,b}=setup();c.visibility(a,1);c.visibility(b,.5);c.reconcile();b.play();assert.equal(a.paused,true);
 a.paused=false;a.dispatchEvent(new Event('playing'));assert.equal(a.paused,true);assert.equal(b.paused,false);
});
test('unloaded sources do not autoplay and rejected play promises are handled',async()=>{
 const {c,a}=setup();a.ready=false;c.visibility(a,1);c.reconcile();assert.equal(a.starts,0);
 a.ready=true;a.play=()=>Promise.reject(new Error('NotAllowedError'));c.reconcile();await new Promise(resolve=>setImmediate(resolve));
});
test('decorative hero stays muted and shares exclusive playback with feed videos',()=>{
 const c=new VideoCoordinator();const hero=new Video();const post=new Video();
 c.register(hero,true);c.register(post);c.setMuted(false);
 assert.equal(hero.muted,true);assert.equal(post.muted,false);
 c.visibility(hero,1);c.reconcile();assert.equal(hero.paused,false);
 c.visibility(hero,0);c.visibility(post,1);c.reconcile();
 assert.equal(hero.paused,true);assert.equal(post.paused,false);
});
