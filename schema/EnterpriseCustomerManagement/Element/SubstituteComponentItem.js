var Modeler = require("../Modeler.js");
var className = 'ElementSubstituteComponentItem';

var ElementSubstituteComponentItem = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SubstituteComponentItem: {
      type: "TypeSubstituteComponentItemType",
      wsdlDefinition: {
        name: "SubstituteComponentItem",
        type: "SubstituteComponentItemType",
        "xsd:annotation": {
          "xsd:documentation": "References the substitute items for the component item"
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
	  SubstituteComponentItem: {
      type: "TypeSubstituteComponentItemType",
      wsdlDefinition: {
        name: "SubstituteComponentItem",
        type: "SubstituteComponentItemType",
        "xsd:annotation": {
          "xsd:documentation": "References the substitute items for the component item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSubstituteComponentItem;
Modeler.register(ElementSubstituteComponentItem, "ElementSubstituteComponentItem");
