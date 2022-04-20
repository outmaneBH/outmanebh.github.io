// Generating content based on the template

const template = `
<div class="col-lg-4">
    <div class="card mb-4 shadow-sm">
        <div class="card-body">
            <strong>AUTHOR</strong>
            <p class="card-text">CONTENT</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button id="btnid"type="button" class="btn btn-sm btn-outline-secondary"> #ID</button>
                    <button id="btnlan"type="button" class="btn btn-sm btn-outline-secondary">LAN</button>
                </div>
                <small class="text-muted">FECHA</small>
            </div>
        </div>
    </div>
</div>`;
var date;
let content = '';
var i = 0;
setInterval(fn1, 500);
function fn1() {
  if (i < 6) {
    date = new Date(quotes[i].fecha);
    let entry = template
      .replace(/ID/g, quotes[i].number)
      .replace(/AUTHOR/g, quotes[i].author)
      .replace(/CONTENT/g, quotes[i].content)
      .replace(/FECHA/g, date.getUTCDate() + " - " + date.getUTCMonth() + " - " + date.getUTCFullYear())
      .replace(/LAN/g, quotes[i].language_code);
    content += entry;
    document.getElementById('spanquotes').innerHTML = i+1;
    document.getElementById('content').innerHTML = content;
    i++;
  }
}

// Registering Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('scripts/config/sw.js');
}
