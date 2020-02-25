import java.util.*;
import java.security.*;
import java.math.*;
import java.net.*;
import java.io.*;

/*Juwan Smith
  2/24/20
  CSC 4980
  Assignment 2 */



public class Assignment2 {

//This portion of this code was borrowed from the web and then later modified for this assignment.	
//This is an encryption method used in order to hash all the text lines from the imported file.
//Link of the borrowed code: https://www.geeksforgeeks.org/sha-1-hash-in-java/

	public static String encryptString(String input) throws NoSuchAlgorithmException {
		
		MessageDigest stuff = MessageDigest.getInstance("SHA-1"); 
		
		byte[] MD = stuff.digest(input.getBytes());
		
		BigInteger some = new BigInteger(1, MD);
		
		String hashedOutput = some.toString(16);
		
		while (hashedOutput.length() < 32) { 
			hashedOutput = "0" + hashedOutput; 
        } 
			return  hashedOutput;
	}
	
//This is the main method in which the hash cracking program is run.	
	public static void main(String[]  args)throws Exception {
		
		//The file is uploaded from a local text file into the program.
		File file = new File("C:\\Users\\juwan\\Desktop\\10-million-password-list-top-1000000.txt");
		
		//Each line of the file is read by the BufferedReader object.
		BufferedReader reader = new BufferedReader(new FileReader(file));
		String line;
		
		//This Scanner is used for inputing a hash from the user.
		Scanner stuff = new Scanner(System.in);		
		
		//The printed sentences at the start of the program.
		System.out.println("*Program Starts*");
		System.out.println("Hello, you're operating a password cracker");
		System.out.print("Enter the hash value of the password you want to crack: ");
		//The user input hash.
		String hash = stuff.nextLine();	
		
		System.out.println("*Wait momentarily......*");
		
		//Used for to keep count of the failed attempts at finding the hash.
		int num = 1;
		
		//The while loop where the core function of the program will execute.
		while ((line = reader.readLine()) != null )
		
	    {
			//The hashed string is instantiated into a new string.
			String line2 = encryptString((String) line);
			
			//The hashed string is compared with the input hash given by the user earlier in the program.
			//If a match is found the the password will be printed and the program will end.
			if(hash.compareTo(line2) == 0) {
				
				System.out.println("*Success. Found password: "+line+" *");
				reader.close();
			
			}
			//If a match is not found then the loop will continue until the end of the file and the number of attempts will increment by 1.
			else if(hash.compareTo(line2) != 0) {
				
				num = num+1;
				System.out.println("Failed Attempt: "+num);
				
			}
	    }
		
		//The Buffered Reader object closes.
		reader.close();
	    
	}
}