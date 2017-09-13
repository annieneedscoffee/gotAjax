$(document).ready(function(){

  $.get(('https://anapioficeandfire.com/api/characters/12'), function(data1){
  $('#heading').text('Game of Thrones Favorite Characters');
  let block1 = $('<div></div>');
  let title1 = $('<h3></h3>');
  $(title1).text('1. ' + data1.name);
  $(block1).append(title1);
  let p1_1 = $('<p></p>');
  $(p1_1).text('Titles: ' + data1.titles[0] + ', ' + data1.titles[1] + ', ' + data1.titles[2]);
  $(block1).append(p1_1);
  let p1_2 = $('<p></p>');
  $.get(('https://anapioficeandfire.com/api/characters/66'), function(spouse1){
      $(p1_2).text('Spouse: ' + spouse1.name);
  })

  $(block1).append(p1_2);
  $('#main').append(block1);
})


  $.get(('https://anapioficeandfire.com/api/characters/13'), function(data2){
  let block2 = $('<div></div>');
  let title2 = $('<h3></h3>');
  $(title2).text('2. ' + data2.name);
  $(block2).append(title2);
  let p2_1 = $('<p></p>');
  $(p2_1).text('Title: ' + data2.titles[0]);
  $(block2).append(p2_1);
  let p2_2 = $('<p></p>');
  $(p2_2).text('Spouse: none' + data2.spouse);
  $(block2).append(p2_2);
  $('#main').append(block2);

})

  $.get(('https://anapioficeandfire.com/api/characters/16'), function(data3){
  let block3 = $('<div></div>');
  let title3 = $('<h3></h3>');
  $(title3).text('3. ' + data3.name);
  $(block3).append(title3);
  let p3_1 = $('<p></p>');
  $(p3_1).text('Title: ' + data3.titles[0]);
  $(block3).append(p3_1);
  let p3_2 = $('<p></p>');
  $.get(('https://www.anapioficeandfire.com/api/characters/862'), function(spouse3){
  $(p3_2).text('Spouse: ' + spouse3.name);
  })

  $(block3).append(p3_2);
  $('#main').append(block3);
})

$.get(('https://anapioficeandfire.com/api/houses/178'), function(house1){
  let block4 = $('<div></div>');
  let houses = $('<h1>Game of Thrones Favorite Houses</h1>');
  let hname4 = $('<h3></h3>');
  $(hname4).text('1. ' + house1.name);
  $(block4).append(houses);
  $(block4).append(hname4);
  let reg1 = $('<p></p>');
  $(reg1).text('Region: ' + house1.region);
  $(block4).append(reg1);
  $.get(('https://anapioficeandfire.com/api/characters/914'), function(leader4){
    let lead1 = $('<p></p>');
    $(lead1).text('Current leader: ' + leader4.name);
    $(block4).append(lead1);
  })

  $.get(('https://anapioficeandfire.com/api/characters/473'), function(heir4){
    let hr1 = $('<p></p>');
    $(hr1).text('Heir: ' + heir4.name);
    $(block4).append(hr1);
  })

  $('#main').append(block4);
})

$.get(('https://anapioficeandfire.com/api/houses/17'), function(house2){
  let block5 = $('<div></div>');
  let hname5 = $('<h3></h3>');
  $(hname5).text('2. ' + house2.name);
  $(block5).append(hname5);
  let reg2 = $('<p></p>');
  $(reg2).text('Region: ' + house2.region);
  $(block5).append(reg2);
  $.get(('https://www.anapioficeandfire.com/api/characters/1029'), function(leader5){
    let lead2 = $('<p></p>');
    $(lead2).text('Current leader: ' + leader5.name);
    $(block5).append(lead2);
  })
  $.get(('https://www.anapioficeandfire.com/api/characters/775'), function(heir5){
    let hr2 = $('<p></p>');
    $(hr2).text('Heir: ' + heir5.name);
    $(block5).append(hr2);
  })

  $('#main').append(block5);
})

$.get(('https://anapioficeandfire.com/api/houses/7'), function(house3){
  let block6 = $('<div></div>');
  let hname6 = $('<h3></h3>');
  $(hname6).text('3. ' + house3.name);
  $(block6).append(hname6);
  let reg3 = $('<p></p>');
  $(reg3).text('Region: ' + house3.region);
  $(block6).append(reg3);
  $.get(('https://www.anapioficeandfire.com/api/characters/894'), function(leader6){
    let lead3 = $('<p></p>');
    $(lead3).text('Current leader: ' + leader6.name);
    $(block6).append(lead3);
  })
  $.get(('https://www.anapioficeandfire.com/api/characters/477'), function(heir6){
    let hr3 = $('<p></p>');
    $(hr3).text('Heir: ' + heir6.name);
    $(block6).append(hr3);
  })

  $('#main').append(block6);
})

let block7 = $('<div id="img1"></div>');

$('#main').append(block7);

  })
