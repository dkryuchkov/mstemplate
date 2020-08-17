var Modeler = require("../Modeler.js");
var className = 'ElementRelatedItemIdentification';

var ElementRelatedItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "RelatedItemIdentification",
        type: "ItemIdentificationType",
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
	  RelatedItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "RelatedItemIdentification",
        type: "ItemIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedItemIdentification;
Modeler.register(ElementRelatedItemIdentification, "ElementRelatedItemIdentification");
