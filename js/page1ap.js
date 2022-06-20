// get element on the page
let fileToBeUploaded = document.getElementById('fileToBeUploaded');
let uploadButton = document.getElementById('upload');
let fileList = document.getElementById('fileList');

//below list to be requsted from server
let availableFiles = [
    ['file 1', '../data/share/testfile.txt'],
    ['file 2', '/var/www/data/share/testfile.txt'], 
    ['file 3', '../data/share/testfile']
];

//papulate files in file list
updateAvailableFiles (availableFiles);

uploadButton.addEventListener('click', uploadtoserver);
function uploadtoserver (){
    console.log(`uploading ${fileToBeUploaded.value}`);
    availableFiles.push(fileToBeUploaded.value);
    fileToBeUploaded.value = null;
    updateAvailableFiles (availableFiles);
}

'<a href="test_file.zip" download>Download File</a>'
function updateAvailableFiles (availableFiles){
    fileList.innerHTML = '';
    for(let i=0; i<availableFiles.length; i++){
        let item = document.createElement('li');
        let atag = document.createElement('a');
        atag.href = availableFiles[i][1];
        atag.download = availableFiles[i][0];

        let itemText = document.createTextNode(`${i+1}. ${availableFiles[i][0]}`);
        atag.appendChild(itemText);
        item.appendChild(atag);
        fileList.appendChild(item);
    }
}

