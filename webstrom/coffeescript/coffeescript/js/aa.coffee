

for i in [0..5]
  console.log "hello #{i}"

fill = (container, liquid = "coffee") ->
"Filling the #{container} with #{liquid}..."

gcd = (a,b) -> if (b==0) then a else gcd(b, a % b)
$("#button").click ->
  a = $("#a").val()
  b = $("#b").val()
  $("#c").html gcd(a,b)
