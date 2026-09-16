function generateRoadmap() {

    const name = document.getElementById("studentName").value.trim();
    const career = document.getElementById("career").value;
    const result = document.getElementById("result");

    if (name === "" || career === "") {

        result.innerHTML = `
            <div class="roadmap">
                <div class="welcome">
                    <h2>⚠️ Almost There!</h2>
                    <p>Please enter your name and select a career.</p>
                </div>
            </div>
        `;

        return;
    }

    let careerName = "";
    let skills = [];
    let roadmap = [];
    let tip = "";

    if (career === "web") {

        careerName = "💻 Web Developer";

        skills = [
            "HTML",
            "CSS",
            "JavaScript",
            "Git & GitHub",
            "Responsive Design",
            "Web Projects"
        ];

        roadmap = [
            ["HTML Fundamentals", "Learn the structure of modern websites."],
            ["CSS & Design", "Create beautiful and responsive interfaces."],
            ["JavaScript", "Add interactive features to websites."],
            ["Git & GitHub", "Learn version control and collaboration."],
            ["Build Projects", "Create real-world web applications."],
            ["Portfolio", "Showcase your projects and skills."]
        ];

        tip = "Practice by building real websites. Every project you build improves your development skills! 🚀";

    } else if (career === "java") {

        careerName = "☕ Java Developer";

        skills = [
            "Core Java",
            "OOP",
            "Collections",
            "Exception Handling",
            "JDBC",
            "SQL",
            "Git & GitHub"
        ];

        roadmap = [
            ["Java Basics", "Learn variables, loops, conditions and methods."],
            ["Object-Oriented Programming", "Understand classes, objects and inheritance."],
            ["Collections", "Learn List, Set, Map and other collections."],
            ["SQL & Database", "Understand database operations."],
            ["JDBC", "Connect Java applications with databases."],
            ["Build Projects", "Create desktop applications using Java."]
        ];

        tip = "Don't just read Java concepts. Write programs and build small applications regularly! ☕";

    } else if (career === "data") {

        careerName = "📊 Data Analyst";

        skills = [
            "Excel",
            "SQL",
            "Python",
            "Pandas",
            "Data Visualization",
            "Power BI"
        ];

        roadmap = [
            ["Excel", "Learn formulas, tables and data analysis."],
            ["SQL", "Learn how to query databases."],
            ["Python", "Understand Python for data analysis."],
            ["Pandas", "Clean and analyze datasets."],
            ["Visualization", "Create meaningful charts and reports."],
            ["Power BI", "Build interactive dashboards."]
        ];

        tip = "Work with real datasets and try to find useful patterns from the data. 📈";

    } else if (career === "ai") {

        careerName = "🤖 AI / ML Developer";

        skills = [
            "Python",
            "Statistics",
            "NumPy",
            "Pandas",
            "Machine Learning",
            "Deep Learning",
            "AI Projects"
        ];

        roadmap = [
            ["Python", "Build a strong programming foundation."],
            ["Statistics", "Learn the mathematical basics for AI."],
            ["NumPy & Pandas", "Work with and analyze data."],
            ["Machine Learning", "Learn algorithms and model building."],
            ["Deep Learning", "Explore neural networks."],
            ["AI Projects", "Build practical AI applications."]
        ];

        tip = "Start with small AI projects and gradually move towards more advanced models. 🤖";
    }

    let skillsHTML = "";

    skills.forEach(skill => {
        skillsHTML += `<span class="skill">${skill}</span>`;
    });

    let roadmapHTML = "";

    roadmap.forEach((step, index) => {
        roadmapHTML += `
            <div class="timeline-item">

                <div class="timeline-number">
                    ${index + 1}
                </div>

                <h4>${step[0]}</h4>
                <p>${step[1]}</p>

            </div>
        `;
    });

    result.innerHTML = `

        <div class="roadmap">

            <div class="welcome">
                <h2>👋 Hello, ${name}!</h2>
                <p>Your personalized career journey is ready.</p>
            </div>

            <div class="career-box">
                <h2>${careerName}</h2>
                <p>🎯 Your Career Goal</p>
            </div>

            <div class="progress-section">

                <h3>📊 Skill Progress</h3>

                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>

                <p>100% Roadmap Prepared</p>

            </div>

            <div class="skills">

                <h3>🛠️ Skills You Need</h3>

                <div class="skill-container">
                    ${skillsHTML}
                </div>

            </div>

            <div class="timeline-section">

                <h3>🛣️ Your Career Roadmap</h3>

                <div class="timeline">
                    ${roadmapHTML}
                </div>

            </div>

            <div class="tip">

                <h3>💡 Career Tip</h3>

                <p>${tip}</p>

            </div>

        </div>
    `;
}