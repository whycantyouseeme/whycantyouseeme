document.addEventListener("DOMContentLoaded", () => {

  const pages = [
`What you are looking at right now is a 2048x2048 image. It contains 4,194,304 pixels. Each pixel stores 24 bits of colour information; 8 bits for red, green, and blue. This means that this single image contains 100,663,296 bits. The total number of possible images at this exact resolution is 2 to the power of 100,663,296. This number is so unimaginably large that writing out each number would take over 30,000,000 digits. For reference, the estimated number of atoms in the observable universe is around 10 to the power of 80, a measly 80 or so digits compared to the 30,000,000 before. The number of possible combinations for this image is so much larger than the amount of atoms in the observable universe that comparison loses meaning. Every possible image that could ever exist at this resolution already exists mathematically. Be that every face, every landscape, your childhood pictures, every distortion. Every possible image that may be so detailed some would call it God.`,

`The image presented above was not pre-determined in any sense. It was generated in your browser using cryptographically secure randomness through the Web Crypto API. This is not your average pseudo-random generator that may be used in solitaire on your Windows PC; this is significantly closer to *true* randomness than that. It pulls randomness from your computer, be it hardware noise or timing jitter, every action you made on your machine leading up to you landing on this website influenced this randomization, with factors so tiny that it'd be impossible for you to noticeably influence them. This is as close as we can get to true randomness within your browser, how will the result make you feel?`,

`What you are seeing is effectively a blind selection from the unfathomably large image index. The amount of images in this index that you can infer any meaning from are infinitesimal—virtually impossible to stumble upon amongst the seemingly never-ending flow of high-entropy randomness. Meaning structure, and reason will remain be sparse, indifferent to the reality we live in. Despite this, somewhere within that space, exists an image, one particular image, which is the closest image to a visual approximation of God. How you define that is up to you, be it theological, symbolical, or something else completely, it exists. Somewhere in the never-ending maze. You could generate billions of these images every second for the rest of your life and never get remotely close. May you take this as a challenge? What if you found God? You may believe you already have, but have you seen her?`,

`How would such image reveal itself? Would it be an incomprehensibly detailed depiction, put together so carefully, as if to resemble the perfection of mother nature? May it hold so much unmistakable purpose that you recognize it from one quick glance? It could never be described in words, all attempts you make to describe such would be ultimately futile, meaning would be lost in the translation from thoughts to words. Maybe God wouldn't be represented by a figure at all, what if divinity could not be imposed by randomness, but was the beauty of the randomness itself? What if everything is God?`,

`Technically, even a 2x2 image has a *closest to God* configuration, despite a 2x2 image, containing RGB pixels,  holding 2 to the power of 96 possible combinations. That is still an astronomically large amount of possibilities, but within such a small grid, it fails to represent a true figure. This 2x2 grid can not encode complexity; failing to encapsulate any detail, meaning, or structure. It may put forward a hint; a watered down version of what could be, but you may never understand it. A 2048x2048 grid does not only multiply possibilities, it instead expands the room for depth so greatly that a meaningful structure becomes a reality. If any image can represent something as great as God, it would be foolish to think four pixels has any power in comparison to millions.`,

`If each pixel has 256 possible per colour channel, then each pixel contains 256^3 possible combinations, that's 16,777,216 possible colours. Combining this with the fact that 4,194,304 pixels exist within the image, the length of this image index would be (256^3)^(4,194,304), a simplification of 2^100,663,296. If we compare these probabilities to events we already consider extremely improbable, for example, shuffling a deck of cards into a specific order (1.24x10^-68), become tiny in comparison to our chances of finding God here.`,

`Finally, somewhere in this space is an image that, if you're lucky enough to beat all odds, is an image you may recognise as true salvation. Or maybe you wouldn't, as God may be represented by an arrangement completely beyond your comprehension; something you write off as a haze of noise. May the face of the divine stare back at you, and may you be the one to feel it. `
  ];

  let currentPage = 0;

  const textContent = document.getElementById('textContent');
  const pageNum = document.getElementById('pageNum');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  function updatePage() {
    textContent.innerText = pages[currentPage];
    pageNum.innerText = `${currentPage + 1}/${pages.length}`;
    prev.classList.toggle("disabled", currentPage === 0);
    next.classList.toggle("disabled", currentPage === pages.length - 1);
  }

  prev.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updatePage();
    }
  });

  next.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updatePage();
    }
  });

  updatePage();
});
