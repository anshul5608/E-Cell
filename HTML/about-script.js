document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.getElementById("team-container");

    // Fetch data from Content.json using Axios
    axios.get("Content.json")
        .then(response => {
            const data = response.data;

            // Loop through each position and its members
            data.forEach(positionGroup => {
                const positionHeading = document.createElement("h3");
                positionHeading.textContent = positionGroup.position;
                positionHeading.style.marginTop = "2rem";
                positionHeading.style.color = "white";
                teamContainer.appendChild(positionHeading);

                // Create a grid for members
                const membersGrid = document.createElement("div");
                membersGrid.classList.add("members-grid");
                membersGrid.style.display = "grid";
                membersGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
                membersGrid.style.gap = "1.5rem";
                membersGrid.style.padding = "1rem";

                positionGroup.members.forEach(member => {
                    const memberCard = document.createElement("div");
                    memberCard.classList.add("member-card");

                    const memberImage = document.createElement("img");
                    memberImage.src = member.image;
                    memberImage.alt = member.name;
                    memberCard.appendChild(memberImage);

                    const memberName = document.createElement("h3");
                    memberName.textContent = member.name;
                    memberCard.appendChild(memberName);

                    const memberPosition = document.createElement("p");
                    memberPosition.textContent = member.position;
                    memberCard.appendChild(memberPosition);

                    const memberEmail = document.createElement("p");
                    memberEmail.textContent = `Email: ${member.email}`;
                    memberCard.appendChild(memberEmail);

                    const memberMobile = document.createElement("p");
                    memberMobile.textContent = `Mobile: ${member.mobile}`;
                    memberCard.appendChild(memberMobile);

                    const memberLinkedIn = document.createElement("a");
                    memberLinkedIn.href = member.linkedin;
                    memberLinkedIn.textContent = "LinkedIn";
                    memberLinkedIn.target = "_blank";
                    memberCard.appendChild(memberLinkedIn);

                    membersGrid.appendChild(memberCard);
                });

                teamContainer.appendChild(membersGrid);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});