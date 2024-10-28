const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileElem');
const fileList = document.getElementById('file-list');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Highlight drop area when item is dragged over it
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

function highlight(e) {
  if (e.type === 'dragenter' || e.type === 'dragover') {
    dropArea.classList.add('hover');
  } else {
    dropArea.classList.remove('hover');
  }
}

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

// Handle selected files
fileInput.addEventListener('change', (e) => {
  const files = e.target.files;
  handleFiles(files);
});

function handleFiles(files) {
  const fileArray = Array.from(files);
  fileList.innerHTML = '';

  fileArray.forEach(file => {
    if (file.type === 'application/pdf') {
      const listItem = document.createElement('div');
      listItem.textContent = file.name;
      fileList.appendChild(listItem);
    } else {
      alert(`${file.name} is not a PDF file.`);
    }
  });
}
