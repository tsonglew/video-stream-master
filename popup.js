// Saves options to chrome.storage
function save_options () {
    let channels = parseInt(document.getElementById('channels').value);
    chrome.storage.sync.set({
        speed: channels,
    }, function () {
        // Update status to let user know options were saved.
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options () {
    chrome.storage.sync.get({
        speed: 1,
    }, function (items) {
        document.getElementById('channels').value = items.speed;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);