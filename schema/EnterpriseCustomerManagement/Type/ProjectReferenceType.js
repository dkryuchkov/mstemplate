var Modeler = require("../Modeler.js");
var className = 'TypeProjectReferenceType';

var TypeProjectReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomProjectReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectReferenceType",
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
    Custom: {
      type: "TypeCustomProjectReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProjectReferenceType;
Modeler.register(TypeProjectReferenceType, "TypeProjectReferenceType");
