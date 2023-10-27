console.log("JS aktiv!")

var githubTestButton = document.getElementById('github-test-button')

githubTestButton.style.backgroundColor = "lime"

function githubFunctionRed() {

  githubTestButton.style.backgroundColor = "red"

  githubTestButton.removeEventListener("click", githubFunctionRed)

  githubTestButton.addEventListener("click", githubFunctionBlue)
}

function githubFunctionBlue() {

  githubTestButton.style.backgroundColor = "#003770"

  githubTestButton.removeEventListener("click", githubFunctionBlue)

  githubTestButton.addEventListener("click", githubFunctionRed)
}

githubTestButton.addEventListener("click", githubFunctionRed)
