package org.albaross.service;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import static org.albaross.service.WebSocketConfig.*;

@Controller
public class MessageController {
	
	private static final String LISTEN_TO = "/hello";
	private static final String REPLY_TO = "/reply";

    @MessageMapping(LISTEN_TO)
    @SendTo(QUEUES + REPLY_TO)
    public Message reply(Message message) throws Exception {
        return new Message("Connected to service!");
    }

}
