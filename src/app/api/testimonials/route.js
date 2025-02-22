export async function GET(request) {
  return new Response(
    JSON.stringify([
      {
        body: "Taking classes at PassionDanse has been a transformative experience for me. The instructors are incredibly skilled and supportive, and I've seen so much improvement in my technique and confidence. I love being part of this vibrant dance community!",
        designation: "Software Engineer",
        userId: 1,
        userName: "Linia korie",
      },
      {
        body: "PassionDanse offers a welcoming and inspiring environment for dancers of all levels. The variety of classes and the expertise of the teachers have truly helped me grow as a dancer. I always leave class feeling energized and motivated.",
        designation: "Marketing Specialist",
        userId: 2,
        userName: "Devid Bell",
      },
      {
        body: "I joined PassionDanse to try something new, and it has exceeded all my expectations. The classes are fun and challenging, and the instructors are passionate about what they do. I've met wonderful people and gained a deeper appreciation for dance.",
        designation: "Nurse",
        userId: 3,
        userName: "Horray coreal",
      },
    ])
  );
}
