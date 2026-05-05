 
        const students = [
        { name: "Salmaan Ahmed", marks: "38%", class: "3rd", address: "India" },
        { name: "Riya Sharma", marks: "85%", class: "10th", address: "123, ABC Colony, Delhi" },
        { name: "Rohan Patel", marks: "70%", class: "12th", address: "456, XYZ Street, Mumbai" },
        { name: "Priya Singh", marks: "95%", class: "8th", address: "789, PQR Nagar, Bangalore" },
        { name: "Ankit Gupta", marks: "60%", class: "9th", address: "101, LMN Road, Kolkata" },
        { name: "Neha Verma", marks: "80%", class: "11th", address: "222, DEF Avenue, Chennai" },
        { name: "Manoj Kumar", marks: "75%", class: "10th", address: "333, GHI Lane, Hyderabad" },
        { name: "Pooja Mishra", marks: "88%", class: "12th", address: "444, STU Colony, Pune" },
        { name: "Rajesh Singhania", marks: "92%", class: "9th", address: "555, VWX Street, Jaipur" }
        ];

        const studentContainer = document.getElementById("studentContainer");
        const searchInput = document.getElementById("searchInput");
        const searchBtn = document.getElementById("searchBtn");


        
        function renderStudents(studentList) {
        studentContainer.innerHTML = studentList.map(student => `
            <div class="card">
            <h3>${student.name}</h3>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
            </div>
        `).join("");
        }

       
        renderStudents(students);

        
        searchInput.addEventListener("input", () => {
        filterStudents();
        });

        
        searchBtn.addEventListener("click", () => {
        filterStudents();
        });

    
        function filterStudents() {
        const searchText = searchInput.value.toLowerCase();
        const filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(searchText)
        );
        renderStudents(filteredStudents);
        }