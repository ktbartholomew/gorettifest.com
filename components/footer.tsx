export function Footer({ className = "mt-8" }: { className?: string }) {
  return (
    <footer className={`${className} text-center text-base text-white`}>
      &copy; {new Date().getFullYear()} Saint Maria Goretti Catholic School
      |{" "}
      <a className="text-white" href="mailto:questions@gorettifest.com">
        Contact Us
      </a>
    </footer>
  );
}
