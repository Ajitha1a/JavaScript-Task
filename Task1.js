// Task 1:

    var para = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";

    const cleanedpara = para.replace(/[^\w\s]|_/g, "").toLowerCase(); // removing special characters

    var totalwordsPara = cleanedpara.length
    console.log("para",totalwordsPara)

    var parasplit = cleanedpara.split(" ")
    console.log("para",parasplit)
 
    var output = {};

    for (var i=0; i < parasplit.length; i++) {
      var word = parasplit[i];
      // console.log(word);
      if (output[word] === undefined) {
        output[word] = 1;
      } else {
        output[word] += 1;
      }
      
    }
    console.log("output",output)

    var frequencyWord = {};

    Object.keys(output).forEach(word => {
      console.log(word);
      const count = output[word];
      // console.log("count",count);
      const frequency = (count / totalwordsPara) * 100;
      // console.log("frequency",frequency);
      frequencyWord[word] = frequency
    });
    console.log(frequencyWord);