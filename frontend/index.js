async function getExplanation() {
    const input = document.getElementById("questionInput").value;
    const output = document.getElementById("output");
    output.innerText = "Loading...";
  
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: input })
      });
  
      if (!response.ok) throw new Error("Network response was not ok");
  
      const data = await response.json();
      output.innerText = data.answer || "No response received.";
    } catch (error) {
      output.innerText = "Error: " + error.message;
      console.error(error);
    }
  }






  