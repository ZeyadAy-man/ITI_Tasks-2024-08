var y = 0
var features = `width=300,height=300,top=0,left=0,resizable=yes,scrollbars=yes`;
function openWindow(){
    childWindow = window.open('', 'child', features);
    childWindow.document.write('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa blanditiis sint maiores ab voluptatum repellendus fugiat labore animi inventore eum necessitatibus tempore magnam at iure nostrum, sapiente ex voluptates eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit sint quos! Sint iste sapiente aliquid voluptatibus, recusandae ex quas sit placeat ullam, eum quod, culpa dicta? Suscipit, quis labore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur saepe alias aut, quisquam dolore rem, repellat mollitia officia sequi expedita illo similique assumenda a fugit architecto, eligendi obcaecati quibusdam idf;lkgdfkfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd?')
    interval = setInterval(() =>{
        y += 5;
        childWindow.scrollBy(0, y);
    }, 600)
}
