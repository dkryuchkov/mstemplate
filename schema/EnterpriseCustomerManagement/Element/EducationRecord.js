var Modeler = require("../Modeler.js");
var className = 'ElementEducationRecord';

var ElementEducationRecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EducationRecord: {
      type: "TypeEducationRecordType",
      wsdlDefinition: {
        name: "EducationRecord",
        type: "EducationRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Education records of a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EducationRecord: {
      type: "TypeEducationRecordType",
      wsdlDefinition: {
        name: "EducationRecord",
        type: "EducationRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Education records of a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEducationRecord;
Modeler.register(ElementEducationRecord, "ElementEducationRecord");
