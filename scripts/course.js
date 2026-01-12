const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD131", name: "Web Design Principles", credits: 3, completed: false },
  { code: "WDD231", name: "Frontend Development", credits: 3, completed: false },
  { code: "CSE110", name: "Programming Basics", credits: 2, completed: true }
];

function displayCourses(list) {
  const container = document.getElementById("courses");
  container.innerHTML = "";
  list.forEach(course => {
    const card = document.createElement("div");
    card.textContent = `${course.code}: ${course.name} (${course.credits} credits)`;
    card.className = course.completed ? "completed" : "incomplete";
    container.appendChild(card);
  });

  const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
  document.getElementById("credits").textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById("allBtn").addEventListener("click", () => displayCourses(courses));
document.getElementById("wddBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.code.startsWith("WDD"))));
document.getElementById("cseBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.code.startsWith("CSE"))));

// Initial load
displayCourses(courses);
