function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dkqGVUZIu3":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var answers;
var res = player.GetVar("TextEntry");

if (res == "") {
  res = "None";
}

var question = "What comments or suggestions do you have to improve this learning experience?";
answers = question + " (USER FEEDBACK: " + res + "  )";

player.SetVar("TextEntry", answers);













//answers = title1res1 + ",  " + title1res2;

//player.SetVar("TextEntryTITLE1", answers);

//alert("Your variable is " + "TEST");
}

