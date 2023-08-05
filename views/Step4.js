// Step4.js
const doneButton = document.querySelector('.Done');

doneButton.addEventListener('click', async () => {
    try {
        // 서버로 POST 요청 보내기
        const response = await fetch('/addCash', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 10 }) // 증가시킬 cash 양 (10)
        });

        if (response.ok) {
            // 서버에서 응답 받은 새로운 cash 값을 업데이트
            const data = await response.json();
            console.log('Updated cash:', data.cash);
        } else {
            console.error('Failed to update cash.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});