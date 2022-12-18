import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { SendNotification } from "./send-notification"

describe("Send notifications", () => {

    it("should be able to send a notification", async () => {
        const notificationRepository = new InMemoryNotificationRepository()
        const sendNotification = new SendNotification(notificationRepository)
        const {notification} =  await sendNotification.execute({
            content: "This is a notification",
            category: "social",
            recipientId: "Exempt recipientId"
        })
        expect(notificationRepository.notifications).toEqual(notification)
    })
})