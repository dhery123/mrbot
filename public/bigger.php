

<html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.min.js"></script>
        <script src="https://cdn.rawgit.com/showdownjs/showdown/1.7.4/dist/showdown.min.js"></script>

        <link rel="stylesheet" href="css/biggerstyles.css" />
    </head>
    <body>
        <div id="message_window">
            <div class="disconnected">
                Disconnected... reconnecting!
            </div>
            <section>
                <div id="message_list">
                    <div id="message_template">
                        <div class="message {{message.type}}">
                            {{#if message.typing}}
                                <div class="typing-indicator">
                                    ...
                                </div>
                            {{/if}}
                            {{{message.html}}}
                        </div>
                    </div>
                </div>
            </section>
            <div id="message_replies">
            </div>
            <footer>
                <form onsubmit="messenger.send(messenger.input.value, event)">
                    <input type="text" autocomplete="off" id="messenger_input" placeholder="Type here..." />
                    <button type="submit">enviar</button>
                </form>
            </footer>
        </div>
        <script src="client.js"></script>
    </body>
</html>
