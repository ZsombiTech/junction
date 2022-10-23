## Budget Buddy

### What issue is our project trying to solve?
Our project is based on the concept of the well-known and already existing mobile apps and wallets of banks and financial service providers, but makes one step forward. It especially focuses on groups doing some sort of activity together, for example going on a trip abroad. Perhaps the majority of group travellers have faced the situation when some members paid significantly more or less than their companions, and conflicts may occured by reason of the disproportions in payments. 

### What services does our project offer?
In our app, groups can be created, in which a temporary, shared bank account is generated, lasting for the duration of the group activity. Each group members can load money on this account which in practice really serves like an ordinary virtual credit card. While paying, besides their own bank account, the user can opt for this aforementioned shared account to deduct the money from. Each members of the group are able to see the complete transaction history, and there is a customizable limit from which a transaction should be permitted by the other group members to happen.  Child accounts can be also created, these are different in a way that for each transaction from these a permisson is required. 

### What kind of technologies did we use in the development?
As a start, we designed a prototype with the help of **Figma**. To achieve a working Proof-of-Concept, we used modern, cutting edge technologies in the hope of a high quality result and a blazingly fast development environment. To give an insight into the finer details, we used **React** to create our user interface, served by a **NodeJS/Express** backend filled with data from **MongoDB**. We wrapped these into an **NX** monorepo and deployed it to our own dedicated server.

### What are our future plans regarding our project?
We do not want our project to exist as a standalone platform, but rather to be integrated into the Wise application.  For a polished experience, our goal would be to get temporary virtual credit cards like ours supported by major mobile payment providers.

### Try it out!
You can easily access our [self hosted website]  (deducks2.tk:4200/login).  Because of the fact that we had less than 48 hours to implement our idea we could not make it fit on all screens. For the best user experience we recommend the use of a larger phone or open it in your desktop browser (not Safari), open the development tools (ctrl+shift+i, cmd+shift+i), enable the Device toolbar and choose the option named iPhone 12 Pro (or similar). (One of the pictures might help.) We established test accounts with usernames test1 to test4 and their respective email addresses: test1-4@gmail.com, so you can play along with our demo. You can log out by clicking the home menu button two times in a row.
