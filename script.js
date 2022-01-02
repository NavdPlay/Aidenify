function aidenify(str) {
  var str=str.toLowerCase().split('');

  var newStr=[];

  for (var i=0; i < str.length; i++) {
    if (str[i]=='a') {
      newStr.push('aiden');
    }

    else if (str[i]=='e') {
      newStr.push('eiden');
    }

    else if (str[i]=='i') {
      newStr.push('isfir');
    }

    else if (str[i]=='o') {
      newStr.push('osfor');
    }

    else if (str[i]=='u') {
      newStr.push('usfur');
    }

    else if (str[i]==' ') {
      newStr.push(' ');
    }

    else if (/[^a-z]/.test(str[i])) {
      newStr.push(str[i])
    }

    else if (/[^aiueo]/.test(str[i]) && str[i + 1]==' '&& str[i - 1] + str[i] !='ng') {
      newStr.push(str[i] + 'es');
    }

    else if (i==str.length - 1 && /[^aiueo]/.test(str[i]) && str[i - 1] + str[i] !='ng') {
      newStr.push(str[i] + 'es');
    }

    else if (/[^aiueo]/.test(str[i])) {
      if (str[i + 1]=='g'&& str[i]=='n') {
        newStr.push('stre'+ str[i]);
      }

      else if (/[^aiueo]/.test(str[i + 1]) && str[i] + str[i + 1] !='ng'&& i !=str.length - 1) {
        newStr.push(str[i] + 'es');
      }

      else {
        newStr.push(str[i]);
      }
    }
  }

  return newStr.join('');
}

function normalize(str) {
  str=str.toLowerCase().split('');

  var newStr=[];

  for (var i=0; i < str.length; i++) {
    if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4]=='aiden') {
      newStr.push('a');
      i+=4;
      continue;
    }

    else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4]=='eiden') {
      newStr.push('e') i+=4;
      continue;
    }

    else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4]=='isfir') {
      newStr.push('i');
      i+=4;
      continue;
    }

    else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4]=='osfor') {
      newStr.push('o');
      i+=4;
      continue;
    }

    else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4]=='usfur') {
      newStr.push('u');
      i+=4;
      continue;
    }

    else if (/[^aiueo]/.test(str[i]) && (/[aiueo]/.test(str[i + 1]) && i !=str.length - 1 && str[i - 1] + str[i] !='ng')) {
      newStr.push(str[i]);
    }

    else if (str[i]==' ') {
      newStr.push(' ');
    }

    else if (/[^a-z]/.test(str[i])) {
      newStr.push(str[i]);
    }

    else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4] + str[i + 5]=='streng') {
      newStr.push('ng');
      i+=4;
      continue;
    }

    else if (/[^aiueo]/.test(str[i]) && str[i + 1] + str[i + 2]=='es') {
      newStr.push(str[i]);
      i++;
      continue;
    }
  }

  return newStr.join('');
}

var toAiden=true;

$('.fa-exchange-alt').click(function() {
    var a=$('#input').val();
    var b=$('#result').val();
    var temp;

    temp=a;
    a=b;
    b=temp;

    $('#input').val(a);
    $('#result').val(b);

    if (toAiden) {
      $('.left-lang').html('Aiden');
      $('.right-lang').html('Normal');
      $('#input').attr('placeholder', 'Masukkan teks Aiden yang mau diubah');
      $('#result').attr('placeholder', 'Arti aslinya akan muncul disini');
    }

    else {
      $('.left-lang').html('Normal');
      $('.right-lang').html('Aiden');
      $('#input').attr('placeholder', 'Masukkan teks yang mau diubah');
      $('#result').attr('placeholder', 'Bahasa rahasia Aiden akan muncul disini');
    }

    toAiden= !toAiden;
  }

);

$('#input').keyup(function() {
    if (toAiden) {
      $('#result').val(aidenify($('#input').val()));
    }

    else {
      $('#result').val(normalize($('#input').val()));
    }
  }

);
