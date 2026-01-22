---
title: Choosing the Right License
description: A guide to selecting the appropriate open-source license for your project.
pubDate: 2026-01-22
updatedDate: 2026-01-22
heroImage: ../../assets/blog-placeholder-3.png
---

I have always admired the open-source community and the importance of sharing knowledge and resources freely. That's why I've always wanted to contribute to the open-source community by sharing my work with others. However, I also wanted to protect the intellectual property and ensure that my work is not misused or misrepresented. To achieve this, I reviewed different licenses in [opensource.org](https://opensource.org/licenses) but there are so many options that it can be overwhelming to choose the right one. This is an opinionated, simplified guide to help you choose the right license for your open-source project based on your goals and values. Please note that this is not legal advice, and you should consult with a legal professional for specific legal questions.

## You want freedom

If your primary goal is to maximize the freedom of use for your software, you should consider permissive licenses. These licenses allow users to use, modify, and distribute the software with minimal restrictions.

### MIT License

The MIT License is a permissive license that allows users to use, modify, and distribute the software without any restrictions. It is a simple and easy-to-understand license that is widely used in the open-source community. The MIT License is suitable for projects that require minimal restrictions on the use of the software. It's a great choice if you want to maximize the freedom of use for your software while still retaining some level of attribution. Users can do almost anything with the code, including using it in proprietary software, as long as they include the original license and copyright notice.

### BSD 2-Clause License

The BSD 2-Clause License is a permissive license that allows users to use, modify, and distribute the software without any restrictions. It is similar to the MIT License but has slightly different wording and requirements. The BSD 2-Clause License is suitable for projects that require minimal restrictions on the use of the software. 

### BSD 3-Clause License

The BSD 3-Clause License is a permissive license that allows users to use, modify, and distribute the software without any restrictions. The main difference between the BSD 2-Clause License is that the BSD 3-Clause License includes a non-endorsement clause, which prohibits users from using the name of the original author or organization to promote derived products without permission. The BSD 3-Clause License is suitable for projects that require minimal restrictions on the use of the software while also protecting the reputation of the original author or organization.

### Wich one to choose?

If you want to maximize freedom and don't mind a simple attribution requirement, the MIT License is a great choice. If you want to add an extra layer of protection against endorsement without permission, the BSD 3-Clause License is a better option. Both licenses are widely accepted and respected in the open-source community.

## You have an ideology

If your primary goal is to promote software freedom and ensure that users have the same rights as the original author, you should consider copyleft licenses. These licenses require users to distribute their modified versions of the software under the same license.

### GNU General Public License v3.0

The GNU General Public License v3.0 is a copyleft license that requires users to distribute their modified versions of the software under the same license. This means that if you modify the software and distribute it, you must also make your modified version available under the same license. The GNU General Public License v3.0 is suitable for projects that aim to promote software freedom and ensure that users have the same rights as the original author.

### GNU Affero General Public License v3.0

The GNU Affero General Public License v3.0 is a copyleft license that is similar to the GNU General Public License v3.0 but includes an additional requirement for software that is used over a network. If you modify the software and use it to provide a service over a network, you must also make your modified version available under the same license. The GNU Affero General Public License v3.0 is suitable for projects that aim to promote software freedom and ensure that users have the same rights as the original author, even when the software is used over a network.

### GNU Lesser General Public License v3.0

The GNU Lesser General Public License v3.0 is a copyleft license that is similar to the GNU General Public License v3.0 but is less restrictive. It allows users to link the software with proprietary software without requiring the proprietary software to be released under the same license. The GNU Lesser General Public License v3.0 is suitable for projects that aim to promote software freedom while allowing for greater flexibility in how the software is used and distributed.

### Wich one to choose?

If you want to promote software freedom and ensure that users have the same rights as the original author, the GNU General Public License v3.0 is a great choice. If your project is intended to be used over a network and you want to ensure that users have the same rights in that context, the GNU Affero General Public License v3.0 is a better option. If you want to promote software freedom while allowing for greater flexibility in how the software is used and distributed, the GNU Lesser General Public License v3.0 is bold choice over BSD or MIT.

## You have a patent

If your primary goal is to protect your software from patent litigation, you should consider licenses that include a patent grant. These licenses provide users with the right to use the software without fear of patent infringement.

### Apache License 2.0

The Apache License 2.0 is a permissive license that allows users to use, modify, and distribute the software without any restrictions. The main difference between the Apache License 2.0 and the BSD 3-Clause License is that the Apache License 2.0 includes a patent grant, which means that users can use the software without fear of patent infringement.

### Other licenses with patent grants

Other licenses that include a patent grant are the GNU General Public License v3.0 and the GNU Affero General Public License v3.0. These licenses provide users with the right to use the software without fear of patent infringement, while also promoting software freedom.

### Wich one to choose?

If you want to protect your software from patent litigation while maximizing freedom of use, the Apache License 2.0 is a great choice. If you also want to promote software freedom and ensure that users have the same rights as the original author, the GNU General Public License v3.0 or the GNU Affero General Public License v3.0 are better options.

## Other Licenses

### The Unlicense

The Unlicense is a public domain dedication that allows users to use, modify, and distribute the software without any restrictions. It is a simple and easy-to-understand license that is widely used in the open-source community. The Unlicense is suitable for projects that require minimal restrictions on the use of the software.

The Unlicense is rather contradictory, the term "unlicensed" implies that the software is not licensed,which means that it is not intened for use or distribution, and therefore all the rights are reserved to the author. However, in reality, it is licensed under the Unlicense. This can lead to confusion and misunderstandings about the legal status of the software. In addition, having a license is important because it provides legal protection for both the author and the users of the software. Without a license, users may be hesitant to use or contribute to the software, which can limit its adoption and impact.

### Creative Commons Zero (CC0)

The family of Creative Commons licenses are not specifically designed for software. Creative Commons licenses are designed for creative works such as music, art, and literature, and are not well-suited for software. Using a Creative Commons license for software can lead to confusion and misunderstandings about the legal status of the software, as well as potential compatibility issues with other open-source licenses.

Nonetheless, Creative Commons Zero (CC0) is sometimes used as a public domain dedication for software when the author wants to waive all rights and allow anyone to use, modify, and distribute the software without any restrictions. For example, some P5.js works which exist both as creative works and code use the CC0 license because it is easy to understand and widely recognized in the creative community.