document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnTask1').addEventListener('click', async () => {
        try{
            let promise = await simulateAsyncTask(2,"Task 1");
            displayResult(promise);
        }
        catch{
            console.log("There was an error")
        }
    });
    document.getElementById('btnTask2').addEventListener('click', async () => {
        try{
            let promise = await simulateAsyncTask(3,"Task 2");
            displayResult(promise);
        }
        catch{
            console.log("There was an error")
        }
    });
    document.getElementById('btnTask3').addEventListener('click', async () => {
        try{
            let promise = await simulateAsyncTask(4,"Task 3");
            displayResult(promise);
        }
        catch{
            console.log("There was an error")
        }
    });
    function simulateAsyncTask(delay, result) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, delay*1000);
        });
    }
    function displayResult(message) {
        const taskResultsDiv = document.getElementById('taskResults');
        taskResultsDiv.innerHTML += `<p>${message}</p>`;
    }
});
    