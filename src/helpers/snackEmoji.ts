export function snackEmoji(name: string) {
    switch (name.toLowerCase()) {
        case 'lanche':
            return '🍔'
        case 'pizza':
            return '🍕'
        case 'bebida':
            return '🥤🍺'
        case 'sobremesa':
            return '🍨🍦'
        default:
            return '🧑‍🍳'        
    }
}