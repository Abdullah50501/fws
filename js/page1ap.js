// get element on the page
let fileToBeUploaded = document.getElementById('fileToBeUploaded');
let uploadButton = document.getElementById('upload');
let fileList = document.getElementById('fileList');

//below list to be requsted from server
let availableFiles = ['file 1', 'file 2', 'file 3']

//papulate files in file list
updateAvailableFiles (availableFiles);

uploadButton.addEventListener('click', uploadtoserver);
function uploadtoserver (){
    console.log(`uploading ${fileToBeUploaded.value}`);
    availableFiles.push(fileToBeUploaded.value);
    fileToBeUploaded.value = null;
    updateAvailableFiles (availableFiles);
}

function updateAvailableFiles (availableFiles){
    fileList.innerHTML = '';
    for(let i=0; i<availableFiles.length; i++){
        
        let item = document.createElement('li');
        let itemText = document.createTextNode(`${i+1}. ${availableFiles[i]}`);
        item.appendChild(itemText);
        fileList.appendChild(item);
    }
}

