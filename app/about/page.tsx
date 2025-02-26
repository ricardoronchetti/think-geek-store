function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        Think
        <span className="bg-green-500 py-2 px-4 rounded-lg tracking-widest text-white">
          Geek
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Three out of the four founding ThinkGeek members started an ISP in the
        Northern Virginia area way way back in 1995. We couldn&apos;t afford
        Solaris, learned about a free UNIX-like OS, and spent almost an entire
        day downloading it onto over 50 floppies for installation on an old 486
        laptop with no cd-rom (thanks Slackware!). After a few years with the
        ISP gig, the ThinkGeek idea popped into our heads, and, operating out of
        a spare room at the ISP office we setup shop and launched the site on
        Friday the 13th, 1999... All the founding members are still in town, and
        we&apos;ve continued to grow our product line, expand our staff
        (including several canines) and enhance the way we interface with
        customers. Who would have thought...
      </p>
    </section>
  );
}
export default AboutPage;
