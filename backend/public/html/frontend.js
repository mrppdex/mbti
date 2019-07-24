console.log('start...');
$("#ptypeTable").hide()
var typeExplained = {
                    IJST: "Responsible, sincere, analytical, reserved, realistic, systematic. Hardworking and trustworthy with sound practical judgment.",
                    FIJS: "Warm, considerate, gentle, responsible, pragmatic, thorough. Devoted caretakers who enjoy being helpful to others.",
                    FIJN: "Idealistic, organized, insightful, dependable, compassionate, gentle. Seek harmony and cooperation, enjoy intellectual stimulation.",
                    IJNT: "Innovative, independent, strategic, logical, reserved, insightful. Driven by their own original ideas to achieve improvements.",
                    IPST: "Action-oriented, logical, analytical spontaneous, reserved, independent. Enjoy adventure, skilled at understanding how mechanical things work.",
                    FIPS: "Gentle, sensitive, nurturing, helpful, flexible, realistic. Seek to crate a personal environment that is both beautiful and practical.",
                    FINP: "Sensitive, creative, Idealistic, perceptive, caring, loyal. Value inner harmony and personal growth, focus on dreams and possibilities.",
                    INPT: "Intellectual, logical, precise, reserved, flexible, imaginative. Original thinkers who enjoy speculation and crative problem solving.",
                    EPST: "Outgoing, realistic, action-oriented, curious, versatile, spontaneous. Pragmatic problem solvers and skillful negotiators.",
                    EFPS: "Playful, enthusiastic, friendly, spontaneous, tactful, flexible. Have strong common sense, enjoy helping people in tangible ways.",
                    EFNP: "Enthusiastic, creative, spontaneous, optimistic, supportive, playful. Value inspiration, enjoy starting new projects, see potential in others.",
                    ENTP: "Inventive, enthusiastic, strategic, enterprising, inquisitive, versatile. Enjoy new ideas and challenges, value inspiration.",
                    EJST: "Efficient, outgoing, analytical, systematic, dependable, realistic. Like to run the show and get things done in an orderly fashion.",
                    EFJS: "Friendly, outgoing, reliable, conscientious, organized, practical. Seek to be helpful and please others, enjoy being active and productive.",
                    EFJN: "Caring, enthusiastic, idealistic, organized, diplomatic, responsible. Skilled communicators who value connection with people.",
                    EJNT: "Strategic, logical, efficient, outhoing, ambitious, independent. Effective organizers of people and long-range planners."
            };


function sendPost() {
    $("#formSubmit").hide()
    var xhr = new XMLHttpRequest();
    //var url = "http://127.0.0.1:33333/";
    var url = "http://35.197.223.13:8080/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify({"text": document.forms["form"].elements["text"].value});
    xhr.send(data);


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var msg = JSON.parse(xhr.responseText);
            //document.getElementById("output").innerHTML = JSON.stringify(json);
            // Try edit msg
            console.log(msg)
            
            var personality = "";
            msg.forEach(getInfo)
            
            function getInfo(item, index) {
                var personalities = { E: "Extraversion", 
                                      I: "Introversion",
                                      S: "Sensing",
                                      N: "Intuition",
                                      F: "Feelling",
                                      T: "Thinking",
                                      J: "Judging",
                                      P: "Perceiving"
                                    };
                personality += item.type;                   
                mbti_type = personalities[item.type];
                mbti_pred = parseInt(parseFloat(item.prediction)*100);
                //mbti_text = `<div>${mbti_type}: ${mbti_pred}%</div>`;
                //console.log(mbti_text);
                $(`#treat${index}`).html(mbti_type);
                $(`#pred${index}`).html(`${mbti_pred}%`);    
            }

            $("#typePtype").html(`<b>${personality}</b>`);
            var explanationKey = personality.split('').sort().join('');
            $("#explanationPtype").html(`${typeExplained[explanationKey]}`);
            $("#ptypeTable").show();
            //console.log(`explanationKey: ${explanationKey}`);

            //$('#msg').html(msg + icon)
            $("#formSubmit").show()
            console.log(msg);
        }
    }
}