import { types } from 'mobx-state-tree';
import { TYPES_OF_CONTENT, FUN_URL, getTextType } from './fun-const';
import { FunTypes } from './fun-types';

export const FunStore = types.model({
    content: types.optional(types.string, ''),
    selectedType: types.optional(types.enumeration(Object.values(TYPES_OF_CONTENT)), TYPES_OF_CONTENT.JOKES),
})
    .views((self) => ({
        get textType() {
            return getTextType(self.selectedType);
        },
    }))
    .volatile((): FunTypes.Volatile => ({
        ws: null
    }))
    .actions((self) => {
        const handleIncomingMessage = (message: MessageEvent) => {
            try {
                self.content = message.data;
            } catch (e) {
                self.content = e.message;
            }
        };

        const handleChangingType = () => {
            self.ws?.send(self.selectedType);
        };

        return { handleIncomingMessage, handleChangingType};
    })
    .actions((self) => {
        const chooseJokes = () => {
            self.selectedType = TYPES_OF_CONTENT.JOKES;
            self.handleChangingType();
        }

        const choosePoems = () => {
            self.selectedType = TYPES_OF_CONTENT.POEMS;
            self.handleChangingType();
        }

        const chooseQuotes = () => {
            self.selectedType = TYPES_OF_CONTENT.QUOTES;
            self.handleChangingType();
        }

        const init = () => {
            self.ws = new WebSocket(FUN_URL);
            self.ws.addEventListener('message', self.handleIncomingMessage);
        };

        const reset = () => {
            if (self.ws) {
                self.ws.close();
                self.ws.removeEventListener('message', self.handleIncomingMessage);
            }
            self.ws = null;
            self.content = '';
        };

        return {
            init,
            reset,
            chooseJokes,
            choosePoems,
            chooseQuotes,
        };
    });
