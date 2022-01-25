import { Image, WrapItem, Center } from "@chakra-ui/react";
import { BASE_URL } from "utils/path/internalPaths";
import { Wrap } from "@chakra-ui/react";
import { CustomEditImage } from "components/Portfolio/CustomEditImage";
const ShowImage = ({ chosenVersion }) => {
  console.log(chosenVersion);
  return (
    <Center>
      <Wrap>
        {chosenVersion && chosenVersion.designs
          ? chosenVersion.designs.map((item, index) => (
              <WrapItem>
                <CustomEditImage
                  galleryItem={
                    item.imageFile
                      ? BASE_URL +
                        item.imageFile.path.replace("static", "public")
                      : "https://bit.ly/dan-abramov"
                  }
                />
                {/* <Image
                  key={index}
                  height="40%"
                  src={
                    item.imageFile
                      ? BASE_URL +
                        item.imageFile.path.replace("static", "public")
                      : "https://bit.ly/dan-abramov"
                  }
                /> */}
              </WrapItem>
            ))
          : null}
      </Wrap>
    </Center>
  );
};
export default ShowImage;
