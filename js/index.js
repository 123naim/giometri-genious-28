function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const base = parseFloat(baseField.value);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const height = parseFloat(heightField.value);

    // calculate base and height
    const area = 0.5 * base * height;

    // Show calculate result
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    
}


function calculateRectangeArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const width = parseFloat(widthField.value);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-lenght');
    const length = parseFloat(lengthField.value);

    // calculate width and length
    const area = width * length;

    // show calculte resutl
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}