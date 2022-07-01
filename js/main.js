
//Array com os paragrafos
var words = [
  "<p>João Enrique ipsum dolor sit amet consectetur adipisicing elit. In natus dolore pariatur impedit commodi blanditiis tenetur! Doloribus aliquam accusantium reiciendis non totam officiis quos exercitationem ipsam eos repellendus, cum quo beatae assumenda cumque placeat natus. Omnis suscipit qui necessitatibus quasi dolore soluta laboriosam perferendis totam repudiandae? Velit, atque. Atque, tempore! Illo voluptate nisi hic ex molestias quidem reiciendis autem nam enim quae vel ipsa ut sint cumque quaerat do joao, commodi obcaecati ipsum beatae ullam consectetur aperiam in! Voluptatibus perferendis architecto, possimus cumque culpa nobis maiores reiciendis distinctio consequuntur quasi alias tenetur ullam, cupiditate ex doloribus harum veritatis saepe. Neque, reprehenderit.</p>" ,
  "<p>Aliquid, neque provident veniam, officia expedita qui recusandae velit distinctio aperiam, maxime animi cupiditate dolore. Nisi, consectetur enim! Aspernatur enim reprehenderit repellat, voluptatum voluptates est adipisci suscipit necessitatibus consequatur. Quod asperiores corrupti eos velit eaque consequatur impedit itaque atque nulla sed quam alias quas exercitationem aut eveniet officia nesciunt dolor praesentium, et quia accusamus quis quisquam? Consectetur, voluptates rem. Asperiores, quas! Reiciendis, eos! Aperiam numquam nesciunt consequatur similique, beatae do joaoque sequi eligendi qui nemo repudiandae, blanditiis quidem! Provident, accusantium cupiditate! Numquam cum delectus harum eius sed, temporibus velit nisi hic dolorum. Fuga.</p>" ,
  "<p>Doloribus qui quibusdam João Enrique ipsum. expedita porro. Aliquam accusamus odit et, blanditiis explicabo,   culpa quas repudiandae facere dolorum officiis fuga commodi, consequatur magnam aut consectetur quo inventore eum molestiae. Non, id necessitatibus aut   nemo autem cum ipsa corporis vero eveniet consequatur voluptatibus animi dolor architecto odio voluptatem sit modi. Cupiditate optio ratione veniam! Quas   iure molestiae modi, eum ab id repellat veniam quia asperiores itaque, tempore cupiditate. Ipsum dolor inventore ratione at saepe quae, blanditiis  pariatur aspernatur nisi hic voluptatem animi a! Ea pariatur debitis eveniet vitae incidunt, ut doloribus neque magni et numquam.</p>" ,
  "<p>Dolor sit amet consectetur adipisicing elit.João Enrique ipsum Ullam cum nesciunt dolor soluta quam enim ab! Consectetur dolorum, ab illo expedita unde  soluta eligendi, at distinctio sit fuga voluptatibus ipsa voluptas placeat magnam consequatur corrupti perspiciatis quia facilis molestias commodi   corporis? Eum cumque ea nostrum dicta dolores temporibus dignissimos incidunt similique quia obcaecati assumenda harum libero, facere inventore dolorum.  Quo consequuntur enim eum debitis cum expedita nulla optio totam sit officia vitae adipisci nemo aspernatur quos, error necessitatibus soluta, laborum,  mollitia rerum! Fugit velit perspiciatis numquam. Omnis ipsum, a iusto minima nemo enim ratione dolor, perspiciatis aut modi, fugiat sequi!</p>" ,
  "<p>Consectetur adipisicing elit, João Enrique ipsum. expedita Mollitia libero at dolore accusantium, placeat consequatur quaerat nam? Quasi perferendis  minus totam maxime, error assumenda dolores enim, impedit corrupti accusantium illum dicta iste, beatae nostrum eveniet iure. Velit corrupti harum   ducimus consectetur eius possimus inventore! Aliquid nesciunt facere eveniet illum distinctio omnis eos corporis nostrum fugiat aut quibusdam perferendis  laboriosam deleniti eius repellat accusamus placeat, perspiciatis soluta. Sed, qui consequatur! Libero, dignissimos dolorum? Distinctio quaerat vero pariatur magnam maiores recusandae. Eos nulla assumenda praesentium, molestias eaque numquam dolor vitae consectetur cupiditate laborum! Praesentium provident aperiam minima officiis illum nihil odit fuga?</p>" ,
  "<p>João Enrique ipsum dolor. Totam ab asperiores ducimus nihil nulla ad sunt amet, deserunt facere sit natus! Quaerat molestiae ab commodi. Maxime veritatis asperiores modi nam reprehenderit voluptatum. Porro nesciunt dignissimos assumenda aliquid. Provident laboriosam minus non! Culpa pariatur est labore placeat voluptatum quam saepe officia veritatis, deserunt debitis praesentium impedit hic dolore magni. Impedit reprehenderit minus error minima labore accusantium velit id, aliquam soluta excepturi sit cum deserunt quos tempora numquam debitis in at! Alias veritatis voluptates eligendi nam ipsam? Magni consequuntur odio error dignissimos illum at alias sit natus sunt reprehenderit, officiis provident modi?</p>" ,
  "<p>Esse pariatur, João Enrique ipsum dolor. accusantium est repudiandae ipsa enim, provident eius sunt id suscipit nesciunt eveniet delectus, minima velit at! Corporis similique neque voluptatem tempore ut ducimus quos. Vel molestiae possimus, nesciunt quis sunt rerum soluta repellat maiores veritatis, ipsa cum expedita numquam obcaecati placeat sapiente mollitia nulla a maxime cumque repellendus ipsam error, voluptatibus nisi? Suscipit, dolor. Impedit quam quo, magnam aliquid sunt illum minus officiis culpa doloribus dolore sint ad. Voluptas, cumque at voluptates eum quod aspernatur et ullam id recusandae odit magnam officiis nobis, saepe dicta? Distinctio dolor delectus quo? Modi!</p>" ,
  "<p>Officiis consequatur quas, João Enrique ipsum dolor sit. et nihil non asperiores pariatur amet obcaecati incidunt! Dicta sequi mollitia possimus unde, illo iure totam laboriosam consequuntur minus eligendi praesentium incidunt! Exercitationem, minima maxime autem voluptates quam placeat magnam aperiam nemo velit necessitatibus! Ipsum, distinctio. Amet vero sit veritatis suscipit eos, vitae impedit ratione quia quaerat blanditiis at neque iusto et natus tempora quos! Voluptatem possimus do joaoque, tenetur animi voluptatibus, maiores quis nemo officiis architecto esse fugiat nulla nihil officia ad, libero eius aliquam neque. Excepturi nihil rerum sed doloribus, soluta distinctio ipsam, itaque cumque, fugiat aliquid animi!</p>",
  "<p>At repudiandae eveniet, João Enrique ipsum dolor sit culpa sequi totam mollitia aliquid odit, perspiciatis, do joaoque repellendus pariatur qui ipsum cum ad autem asperiores consectetur voluptatum necessitatibus eum impedit quos rem? Libero expedita, laboriosam fugit architecto perspiciatis rem dignissimos ipsum blanditiis quo, dicta voluptas, aut nihil quis ullam quod. Natus, ipsa soluta ipsam minus dicta voluptas reiciendis. Soluta officia voluptatum maxime? Adipisci similique omnis quaerat alias, placeat est doloribus voluptates voluptatem, quidem ad eius libero repellendus dignissimos, eos repellat inventore vero sequi laborum iure nemo! Praesentium laudantium provident dignissimos voluptates atque quia necessitatibus consectetur debitis libero cupiditate.</p>" ,
  "<p>Sit amet consectetur adipisicing elit, João Enrique ipsum dolore. Laborum quo, perferendis similique ipsa ducimus aliquam rerum quas facere error aperiam deleniti labore a animi? Voluptatem labore alias nulla voluptas ducimus ullam earum dignissimos. Quo quasi voluptatem nam quae officiis, voluptatibus adipisci sit, totam quas vitae alias. Reiciendis, vitae. Voluptatem voluptate ullam sequi itaque molestias. Deserunt repudiandae ullam magnam quia, molestiae nobis quis magni quidem praesentium unde ratione vitae maxime qui, error nesciunt! Quod distinctio reiciendis repellendus consequatur quo suscipit vitae optio voluptas quia. Et voluptate tempore, officia, repellendus neque exercitationem perspiciatis soluta, laboriosam vero quas molestias delectus ut eligendi dolore?</p>"
];

//Função que mostrar Texto
function mostrarTexto() {

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    var inputParagrafos = document.querySelector(".paragrafos")
    var paragrafos = inputParagrafos.value;


    shuffle(words);

    for (i = 0; i <= 10; i++) {
      if (paragrafos == i) {

        var texto = words.slice(0, i)//Mostrar array do 0 até o valor digitado
        texto = texto.join("");//substituir a virgula q separa os valores do array por um espaço vazio

        document.getElementById("trocar-texto").innerHTML = texto;//mostrar resultado
      }
    }

    //caso o usuário digite mais de 10
    if(paragrafos >= 12){
      alert("por favor, informe até 10 paragrafos");
    }
    
  }