export function scrollToApplication() {
  const { lenis } = useScroll();

  if (!lenis) {
    return;
  }

  lenis.scrollTo("#application");
}
