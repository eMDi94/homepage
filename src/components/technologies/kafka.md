---
title: Apache Kafka
icon: /technologies/kafka.png
iconFormat: png
sortOrder: 8
---

At some point in my professional carrer, I had the necessity to distribute and synchronize data between multiple installations of the system. 
At this point, I decided to learn Kafka to take advantage of its queue mechanism. Essentially, I used a queue where the producer push the updated values, and multiple consumers connected to the queue will consume the messages and updates its internal data.
With this asynchronous mechanism, I decoupled the action of producing data from the consuming of data, also allowing to distribute the update of the internal state in the installation.