
//特殊字符转换函数
function transformCharacter(character) {
    character_array = character.split('');
    for (i = 0; i < character_array.length; i++) {
        switch (character_array[i]) {
            case "+":
                character_array[i] = "%2B";
                break;

            case " ":
                character_array[i] = "%20";
                break;

            case "/":
                character_array[i] = "%2F";
                break;

            case "?":
                character_array[i] = "%3F";
                break;

            case "%":
                character_array[i] = "%25";
                break;

            case "#":
                character_array[i] = "%23";
                break;

            case "&":
                character_array[i] = "%26";
                break;

            case "=":
                character_array[i] = "%3D";
                break;
        }
    }

    //把数组转换成字符串并返回 
    return character_array.join("");
}

