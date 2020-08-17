var Modeler = require("../Modeler.js");
var className = 'TypeProjectTaskReferenceType';

var TypeProjectTaskReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectIdentfication: {
      type: "TypeProjectIdentficationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectIdentfication",
        type: "ProjectIdentficationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaskIdentification",
        type: "TaskIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProjectTaskReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectTaskReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  ProjectIdentfication: {
      type: "TypeProjectIdentficationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectIdentfication",
        type: "ProjectIdentficationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaskIdentification",
        type: "TaskIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProjectTaskReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectTaskReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProjectTaskReferenceType;
Modeler.register(TypeProjectTaskReferenceType, "TypeProjectTaskReferenceType");
