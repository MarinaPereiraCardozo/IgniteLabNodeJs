import { Content } from "./content"
import { Notification } from "./notifications"

describe("Notification", () => {

    it('it should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content("Você recebeu uma nova solicitação de amizade"),
            category: "social",
            recipientId: "exemplo-recipientId"

        })
        expect(notification).toBeTruthy()
    })

    // it('it should not be able to create a notification content with less than 5 characters', () => {
    //     expect(() => new Content("aaa")).toThrow()
    // })

    // it('it should not be able to create a notification content with more than 240 characters', () => {
    //     expect(() => new Content("a".repeat(241))).toThrow()
    // })
})