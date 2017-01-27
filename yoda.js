const YodaSpeak = require('yoda-speak');


const yoda = new YodaSpeak("6G1BKevTa3msh5tQRejtMufyOwGRp12ju2CjsnQWTHW3AtY4uA");
const content = "Winter is on its way";

yoda.convert(content,
    function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Result:", result.toString());

    }
});