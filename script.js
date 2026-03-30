let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function displayJobs(list = jobs) {
  let jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  list.forEach((job, index) => {
    jobList.innerHTML += `
      <div class="job">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <button onclick="applyJob(${index})">Apply</button>
      </div>
    `;
  });
}

function addJob() {
  let title = document.getElementById("title").value;
  let company = document.getElementById("company").value;

  if (title && company) {
    jobs.push({ title, company });
    localStorage.setItem("jobs", JSON.stringify(jobs));
    displayJobs();
  }
}

function applyJob(index) {
  alert("Applied for " + jobs[index].title);
}

// 🔍 Search
document.getElementById("search").addEventListener("input", function () {
  let value = this.value.toLowerCase();

  let filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value)
  );

  displayJobs(filtered);
});

// Initial load
displayJobs();