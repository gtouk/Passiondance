export async function GET(request) {
  return new Response(
    JSON.stringify([
      {
        body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n\n Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        excerpt:
          " Intensive sessions focused on specific dance styles or techniques, led by renowned instructors. These workshops enhance skills, teach new choreography, and provide personalized feedback for dancers of all levels.",
        id: 0,
        meta: {
          categories: ["creative"],
          created: "02 July, 2019",
          tags: ["Women fashion"],
        },
        title: "Dance Workshops",
        userId: 1,
      },
      {
        body: "A vibrant performance event where students and instructors showcase their talents and progress. Open to family, friends, and the local community, it celebrates dedication with diverse performances highlighting various dance styles.",
        excerpt:
          "A vibrant performance event where students and instructors showcase their talents and progress. Open to family, friends, and the local community, it celebrates dedication with diverse performances highlighting various dance styles.",
        id: 1,
        meta: {
          categories: ["design"],
          created: "08 june, 2019",
          tags: ["men fashion"],
        },
        title: "Annual Dance Showcase",
        userId: 2,
      },
      {
        body: "Fun, informal gatherings where dancers of all levels practice, socialize, and enjoy dancing in a relaxed environment. These events feature a mix of dance styles, music, and themes, creating a lively atmosphere.",
        excerpt:
          "Fun, informal gatherings where dancers of all levels practice, socialize, and enjoy dancing in a relaxed environment. These events feature a mix of dance styles, music, and themes, creating a lively atmosphere.",
        id: 2,
        meta: {
          categories: ["creative, design"],
          created: "12 august, 2019",
          tags: ["clothing"],
        },
        title: "Social Dance Nights",
        userId: 3,
      },
      {
        body: "Energetic classes combining dance and fitness to improve cardiovascular health, strength, and flexibility. Set to upbeat music, these classes make workouts enjoyable and are suitable for all fitness levels.",
        excerpt:
          "Energetic classes combining dance and fitness to improve cardiovascular health, strength, and flexibility. Set to upbeat music, these classes make workouts enjoyable and are suitable for all fitness levels.",
        id: 3,
        meta: {
          categories: ["creative"],
          created: "19 jun, 2019",
          tags: ["Women fashion"],
        },
        title: "Dance Fitness Classes",
        userId: 1,
      },
      {
        body: "Exclusive sessions led by internationally acclaimed choreographers. These masterclasses offer advanced techniques, creative processes, and performance tips, inspiring and challenging intermediate and advanced dancers.",
        excerpt:
          "Exclusive sessions led by internationally acclaimed choreographers. These masterclasses offer advanced techniques, creative processes, and performance tips, inspiring and challenging intermediate and advanced dancers.",
        id: 4,
        meta: {
          categories: ["design"],
          created: "02 feb, 2019",
          tags: ["Women", "men"],
        },
        title: "Masterclasses with Guest Choreographers",
        userId: 3,
      },
    ])
  );
}
