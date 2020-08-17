var Modeler = require("../Modeler.js");
var className = 'ElementEmploymentRecord';

var ElementEmploymentRecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmploymentRecord: {
      type: "TypeEmploymentRecordType",
      wsdlDefinition: {
        name: "EmploymentRecord",
        type: "EmploymentRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Employment records of a person"
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
	  EmploymentRecord: {
      type: "TypeEmploymentRecordType",
      wsdlDefinition: {
        name: "EmploymentRecord",
        type: "EmploymentRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Employment records of a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmploymentRecord;
Modeler.register(ElementEmploymentRecord, "ElementEmploymentRecord");
