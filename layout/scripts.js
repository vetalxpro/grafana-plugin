// Config
let ServerAPI = 'http://localhost:3001/';

let ApiRoutes = {
    metrics: {
        create: 'v2/metrics'
    }
}
//end Config


let _statusText = $('#statusText');
let _sendBtn = $('#sendBtn');
_sendBtn.on('click', createMetrics);



function createMetrics() {
    $.post(
        ServerAPI + ApiRoutes.metrics.create,
        {
            p1: "Test 111"
        },
        (response) => {
            console.log('v2/metrics - success\n', response);
            _statusText.text('Metric was successfully added.');
        }
    );
}