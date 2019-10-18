// default export
import Teacher from "./teacher";
//import Teacher, { promote } from "./teacher";
//import React, { component } from "react";

// default -> import ... from '';
// Named -> import {...} from '';

const teacher = new Teacher("Golam Rabbani", "MSc");
teacher.teach();
