import java.util.Scanner;

public class caeser {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter 0 to encrypt and 1 to decrypt: ");
        int encdec = scanner.nextInt();

        if (encdec == 0) {
            System.out.print("Enter plain text to encrypt: ");
            String plainText = scanner.next();
            System.out.println(caeser.encrypt(plainText));
            scanner.close();
        } else if (encdec == 1) {
            System.out.print("Enter cypher text to decrypt: ");
            String cipherText = scanner.next();
            System.out.println(caeser.decrypt(cipherText));
            scanner.close();
        } else {
            System.out.println("Enter either 0 or 1");
            scanner.close();
        }
    }

    public static String encrypt(String plainText) {
        String cipher_text = "";
        char[] characters = plainText.toCharArray();

        for (char character : characters) {
            int newCharacterAscii = ((int) character + 3) % 127;

            if (newCharacterAscii < 32) {
                char newCharacter = (char) (32 + newCharacterAscii);
                cipher_text += newCharacter;
            } else {
                cipher_text += (char) newCharacterAscii;
            }
        }
        return cipher_text;
    }

    public static String decrypt(String cipherText) {
        String plain_text = "";
        char[] characters = cipherText.toCharArray();

        for (char character : characters) {
            int originalCharacterAscii = ((int) character - 3) % 127;

            if (originalCharacterAscii < 32) {
                char originalCharacter = (char) (127 - (32 - originalCharacterAscii));
                plain_text += originalCharacter;
            } else {
                plain_text += (char) originalCharacterAscii;
            }
        }

        return plain_text;
    }
}