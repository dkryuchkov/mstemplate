var Modeler = require("../Modeler.js");
var className = 'TypeItemFormulaReferenceType';

var TypeItemFormulaReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemFormulaIdentification: {
      type: "TypeItemFormulaIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemFormulaIdentification",
        type: "ItemFormulaIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemFormulaReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemFormulaReferenceType",
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
	  ItemFormulaIdentification: {
      type: "TypeItemFormulaIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemFormulaIdentification",
        type: "ItemFormulaIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemFormulaReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemFormulaReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemFormulaReferenceType;
Modeler.register(TypeItemFormulaReferenceType, "TypeItemFormulaReferenceType");
